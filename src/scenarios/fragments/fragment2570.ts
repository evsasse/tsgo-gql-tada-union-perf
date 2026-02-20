import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2568 } from "./fragment2568";
import type { FragmentToken2569 } from "./fragment2569";

export const FRAGMENT_2570 = gql(`
  fragment Fragment2570 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult2570 = ResultOf<typeof FRAGMENT_2570>;
type FragmentSelf2570 = NonNullable<FragmentResult2570>;

export type FragmentToken2570 =
  | FragmentSelf2570["__typename"]
  | FragmentSelf2570["typenameHint"] | FragmentToken2568 | FragmentToken2569;
