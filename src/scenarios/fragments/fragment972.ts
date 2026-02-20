import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken970 } from "./fragment970";
import type { FragmentToken971 } from "./fragment971";

export const FRAGMENT_972 = gql(`
  fragment Fragment972 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult972 = ResultOf<typeof FRAGMENT_972>;
type FragmentSelf972 = NonNullable<FragmentResult972>;

export type FragmentToken972 =
  | FragmentSelf972["__typename"]
  | FragmentSelf972["typenameHint"] | FragmentToken970 | FragmentToken971;
