import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2792 } from "./fragment2792";
import type { FragmentToken2793 } from "./fragment2793";

export const FRAGMENT_2794 = gql(`
  fragment Fragment2794 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult2794 = ResultOf<typeof FRAGMENT_2794>;
type FragmentSelf2794 = NonNullable<FragmentResult2794>;

export type FragmentToken2794 =
  | FragmentSelf2794["__typename"]
  | FragmentSelf2794["typenameHint"] | FragmentToken2792 | FragmentToken2793;
