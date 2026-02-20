import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2415 } from "./fragment2415";
import type { FragmentToken2416 } from "./fragment2416";

export const FRAGMENT_2417 = gql(`
  fragment Fragment2417 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult2417 = ResultOf<typeof FRAGMENT_2417>;
type FragmentSelf2417 = NonNullable<FragmentResult2417>;

export type FragmentToken2417 =
  | FragmentSelf2417["__typename"]
  | FragmentSelf2417["typenameHint"] | FragmentToken2415 | FragmentToken2416;
