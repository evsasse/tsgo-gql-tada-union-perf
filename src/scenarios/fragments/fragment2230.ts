import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2228 } from "./fragment2228";
import type { FragmentToken2229 } from "./fragment2229";

export const FRAGMENT_2230 = gql(`
  fragment Fragment2230 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult2230 = ResultOf<typeof FRAGMENT_2230>;
type FragmentSelf2230 = NonNullable<FragmentResult2230>;

export type FragmentToken2230 =
  | FragmentSelf2230["__typename"]
  | FragmentSelf2230["typenameHint"] | FragmentToken2228 | FragmentToken2229;
