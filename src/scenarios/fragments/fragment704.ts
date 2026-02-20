import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken702 } from "./fragment702";
import type { FragmentToken703 } from "./fragment703";

export const FRAGMENT_704 = gql(`
  fragment Fragment704 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult704 = ResultOf<typeof FRAGMENT_704>;
type FragmentSelf704 = NonNullable<FragmentResult704>;

export type FragmentToken704 =
  | FragmentSelf704["__typename"]
  | FragmentSelf704["typenameHint"] | FragmentToken702 | FragmentToken703;
