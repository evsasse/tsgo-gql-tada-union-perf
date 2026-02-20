import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2752 } from "./fragment2752";
import type { FragmentToken2753 } from "./fragment2753";

export const FRAGMENT_2754 = gql(`
  fragment Fragment2754 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult2754 = ResultOf<typeof FRAGMENT_2754>;
type FragmentSelf2754 = NonNullable<FragmentResult2754>;

export type FragmentToken2754 =
  | FragmentSelf2754["__typename"]
  | FragmentSelf2754["typenameHint"] | FragmentToken2752 | FragmentToken2753;
