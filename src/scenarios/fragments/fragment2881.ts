import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2879 } from "./fragment2879";
import type { FragmentToken2880 } from "./fragment2880";

export const FRAGMENT_2881 = gql(`
  fragment Fragment2881 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult2881 = ResultOf<typeof FRAGMENT_2881>;
type FragmentSelf2881 = NonNullable<FragmentResult2881>;

export type FragmentToken2881 =
  | FragmentSelf2881["__typename"]
  | FragmentSelf2881["typenameHint"] | FragmentToken2879 | FragmentToken2880;
