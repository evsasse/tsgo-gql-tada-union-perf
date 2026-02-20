import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1894 } from "./fragment1894";
import type { FragmentToken1895 } from "./fragment1895";

export const FRAGMENT_1896 = gql(`
  fragment Fragment1896 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult1896 = ResultOf<typeof FRAGMENT_1896>;
type FragmentSelf1896 = NonNullable<FragmentResult1896>;

export type FragmentToken1896 =
  | FragmentSelf1896["__typename"]
  | FragmentSelf1896["typenameHint"] | FragmentToken1894 | FragmentToken1895;
