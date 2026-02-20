import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2754 } from "./fragment2754";
import type { FragmentToken2755 } from "./fragment2755";

export const FRAGMENT_2756 = gql(`
  fragment Fragment2756 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult2756 = ResultOf<typeof FRAGMENT_2756>;
type FragmentSelf2756 = NonNullable<FragmentResult2756>;

export type FragmentToken2756 =
  | FragmentSelf2756["__typename"]
  | FragmentSelf2756["typenameHint"] | FragmentToken2754 | FragmentToken2755;
