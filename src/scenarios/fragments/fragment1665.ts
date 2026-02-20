import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1663 } from "./fragment1663";
import type { FragmentToken1664 } from "./fragment1664";

export const FRAGMENT_1665 = gql(`
  fragment Fragment1665 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult1665 = ResultOf<typeof FRAGMENT_1665>;
type FragmentSelf1665 = NonNullable<FragmentResult1665>;

export type FragmentToken1665 =
  | FragmentSelf1665["__typename"]
  | FragmentSelf1665["typenameHint"] | FragmentToken1663 | FragmentToken1664;
