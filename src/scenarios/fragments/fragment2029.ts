import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2027 } from "./fragment2027";
import type { FragmentToken2028 } from "./fragment2028";

export const FRAGMENT_2029 = gql(`
  fragment Fragment2029 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult2029 = ResultOf<typeof FRAGMENT_2029>;
type FragmentSelf2029 = NonNullable<FragmentResult2029>;

export type FragmentToken2029 =
  | FragmentSelf2029["__typename"]
  | FragmentSelf2029["typenameHint"] | FragmentToken2027 | FragmentToken2028;
