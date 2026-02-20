import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2319 } from "./fragment2319";
import type { FragmentToken2320 } from "./fragment2320";

export const FRAGMENT_2321 = gql(`
  fragment Fragment2321 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult2321 = ResultOf<typeof FRAGMENT_2321>;
type FragmentSelf2321 = NonNullable<FragmentResult2321>;

export type FragmentToken2321 =
  | FragmentSelf2321["__typename"]
  | FragmentSelf2321["typenameHint"] | FragmentToken2319 | FragmentToken2320;
