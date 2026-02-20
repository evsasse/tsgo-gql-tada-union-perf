import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1917 } from "./fragment1917";
import type { FragmentToken1918 } from "./fragment1918";

export const FRAGMENT_1919 = gql(`
  fragment Fragment1919 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult1919 = ResultOf<typeof FRAGMENT_1919>;
type FragmentSelf1919 = NonNullable<FragmentResult1919>;

export type FragmentToken1919 =
  | FragmentSelf1919["__typename"]
  | FragmentSelf1919["typenameHint"] | FragmentToken1917 | FragmentToken1918;
