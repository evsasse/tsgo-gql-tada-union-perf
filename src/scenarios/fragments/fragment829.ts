import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken827 } from "./fragment827";
import type { FragmentToken828 } from "./fragment828";

export const FRAGMENT_829 = gql(`
  fragment Fragment829 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult829 = ResultOf<typeof FRAGMENT_829>;
type FragmentSelf829 = NonNullable<FragmentResult829>;

export type FragmentToken829 =
  | FragmentSelf829["__typename"]
  | FragmentSelf829["typenameHint"] | FragmentToken827 | FragmentToken828;
