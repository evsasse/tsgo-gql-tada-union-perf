import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2755 } from "./fragment2755";
import type { FragmentToken2756 } from "./fragment2756";

export const FRAGMENT_2757 = gql(`
  fragment Fragment2757 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult2757 = ResultOf<typeof FRAGMENT_2757>;
type FragmentSelf2757 = NonNullable<FragmentResult2757>;

export type FragmentToken2757 =
  | FragmentSelf2757["__typename"]
  | FragmentSelf2757["typenameHint"] | FragmentToken2755 | FragmentToken2756;
