import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2097 } from "./fragment2097";
import type { FragmentToken2098 } from "./fragment2098";

export const FRAGMENT_2099 = gql(`
  fragment Fragment2099 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult2099 = ResultOf<typeof FRAGMENT_2099>;
type FragmentSelf2099 = NonNullable<FragmentResult2099>;

export type FragmentToken2099 =
  | FragmentSelf2099["__typename"]
  | FragmentSelf2099["typenameHint"] | FragmentToken2097 | FragmentToken2098;
