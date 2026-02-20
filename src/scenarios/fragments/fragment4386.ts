import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4384 } from "./fragment4384";
import type { FragmentToken4385 } from "./fragment4385";

export const FRAGMENT_4386 = gql(`
  fragment Fragment4386 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult4386 = ResultOf<typeof FRAGMENT_4386>;
type FragmentSelf4386 = NonNullable<FragmentResult4386>;

export type FragmentToken4386 =
  | FragmentSelf4386["__typename"]
  | FragmentSelf4386["typenameHint"] | FragmentToken4384 | FragmentToken4385;
