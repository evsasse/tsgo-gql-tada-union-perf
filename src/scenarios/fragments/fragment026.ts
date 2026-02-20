import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken024 } from "./fragment024";
import type { FragmentToken025 } from "./fragment025";

export const FRAGMENT_026 = gql(`
  fragment Fragment026 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult026 = ResultOf<typeof FRAGMENT_026>;
type FragmentSelf026 = NonNullable<FragmentResult026>;

export type FragmentToken026 =
  | FragmentSelf026["__typename"]
  | FragmentSelf026["typenameHint"] | FragmentToken024 | FragmentToken025;
