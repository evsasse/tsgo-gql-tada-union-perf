import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2417 } from "./fragment2417";
import type { FragmentToken2418 } from "./fragment2418";

export const FRAGMENT_2419 = gql(`
  fragment Fragment2419 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult2419 = ResultOf<typeof FRAGMENT_2419>;
type FragmentSelf2419 = NonNullable<FragmentResult2419>;

export type FragmentToken2419 =
  | FragmentSelf2419["__typename"]
  | FragmentSelf2419["typenameHint"] | FragmentToken2417 | FragmentToken2418;
