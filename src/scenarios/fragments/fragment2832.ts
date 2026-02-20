import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2830 } from "./fragment2830";
import type { FragmentToken2831 } from "./fragment2831";

export const FRAGMENT_2832 = gql(`
  fragment Fragment2832 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult2832 = ResultOf<typeof FRAGMENT_2832>;
type FragmentSelf2832 = NonNullable<FragmentResult2832>;

export type FragmentToken2832 =
  | FragmentSelf2832["__typename"]
  | FragmentSelf2832["typenameHint"] | FragmentToken2830 | FragmentToken2831;
