import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken025 } from "./fragment025";
import type { FragmentToken026 } from "./fragment026";

export const FRAGMENT_027 = gql(`
  fragment Fragment027 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult027 = ResultOf<typeof FRAGMENT_027>;
type FragmentSelf027 = NonNullable<FragmentResult027>;

export type FragmentToken027 =
  | FragmentSelf027["__typename"]
  | FragmentSelf027["typenameHint"] | FragmentToken025 | FragmentToken026;
