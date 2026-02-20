import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2751 } from "./fragment2751";
import type { FragmentToken2752 } from "./fragment2752";

export const FRAGMENT_2753 = gql(`
  fragment Fragment2753 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult2753 = ResultOf<typeof FRAGMENT_2753>;
type FragmentSelf2753 = NonNullable<FragmentResult2753>;

export type FragmentToken2753 =
  | FragmentSelf2753["__typename"]
  | FragmentSelf2753["typenameHint"] | FragmentToken2751 | FragmentToken2752;
