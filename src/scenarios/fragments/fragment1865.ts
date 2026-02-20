import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1863 } from "./fragment1863";
import type { FragmentToken1864 } from "./fragment1864";

export const FRAGMENT_1865 = gql(`
  fragment Fragment1865 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult1865 = ResultOf<typeof FRAGMENT_1865>;
type FragmentSelf1865 = NonNullable<FragmentResult1865>;

export type FragmentToken1865 =
  | FragmentSelf1865["__typename"]
  | FragmentSelf1865["typenameHint"] | FragmentToken1863 | FragmentToken1864;
