import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1852 } from "./fragment1852";
import type { FragmentToken1853 } from "./fragment1853";

export const FRAGMENT_1854 = gql(`
  fragment Fragment1854 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult1854 = ResultOf<typeof FRAGMENT_1854>;
type FragmentSelf1854 = NonNullable<FragmentResult1854>;

export type FragmentToken1854 =
  | FragmentSelf1854["__typename"]
  | FragmentSelf1854["typenameHint"] | FragmentToken1852 | FragmentToken1853;
