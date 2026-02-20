import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2612 } from "./fragment2612";
import type { FragmentToken2613 } from "./fragment2613";

export const FRAGMENT_2614 = gql(`
  fragment Fragment2614 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult2614 = ResultOf<typeof FRAGMENT_2614>;
type FragmentSelf2614 = NonNullable<FragmentResult2614>;

export type FragmentToken2614 =
  | FragmentSelf2614["__typename"]
  | FragmentSelf2614["typenameHint"] | FragmentToken2612 | FragmentToken2613;
