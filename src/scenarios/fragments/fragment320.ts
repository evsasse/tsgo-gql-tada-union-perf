import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken318 } from "./fragment318";
import type { FragmentToken319 } from "./fragment319";

export const FRAGMENT_320 = gql(`
  fragment Fragment320 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult320 = ResultOf<typeof FRAGMENT_320>;
type FragmentSelf320 = NonNullable<FragmentResult320>;

export type FragmentToken320 =
  | FragmentSelf320["__typename"]
  | FragmentSelf320["typenameHint"] | FragmentToken318 | FragmentToken319;
