import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2085 } from "./fragment2085";
import type { FragmentToken2086 } from "./fragment2086";

export const FRAGMENT_2087 = gql(`
  fragment Fragment2087 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult2087 = ResultOf<typeof FRAGMENT_2087>;
type FragmentSelf2087 = NonNullable<FragmentResult2087>;

export type FragmentToken2087 =
  | FragmentSelf2087["__typename"]
  | FragmentSelf2087["typenameHint"] | FragmentToken2085 | FragmentToken2086;
