import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2416 } from "./fragment2416";
import type { FragmentToken2417 } from "./fragment2417";

export const FRAGMENT_2418 = gql(`
  fragment Fragment2418 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult2418 = ResultOf<typeof FRAGMENT_2418>;
type FragmentSelf2418 = NonNullable<FragmentResult2418>;

export type FragmentToken2418 =
  | FragmentSelf2418["__typename"]
  | FragmentSelf2418["typenameHint"] | FragmentToken2416 | FragmentToken2417;
