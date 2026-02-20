import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1948 } from "./fragment1948";
import type { FragmentToken1949 } from "./fragment1949";

export const FRAGMENT_1950 = gql(`
  fragment Fragment1950 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult1950 = ResultOf<typeof FRAGMENT_1950>;
type FragmentSelf1950 = NonNullable<FragmentResult1950>;

export type FragmentToken1950 =
  | FragmentSelf1950["__typename"]
  | FragmentSelf1950["typenameHint"] | FragmentToken1948 | FragmentToken1949;
