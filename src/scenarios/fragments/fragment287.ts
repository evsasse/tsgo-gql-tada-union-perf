import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken285 } from "./fragment285";
import type { FragmentToken286 } from "./fragment286";

export const FRAGMENT_287 = gql(`
  fragment Fragment287 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult287 = ResultOf<typeof FRAGMENT_287>;
type FragmentSelf287 = NonNullable<FragmentResult287>;

export type FragmentToken287 =
  | FragmentSelf287["__typename"]
  | FragmentSelf287["typenameHint"] | FragmentToken285 | FragmentToken286;
