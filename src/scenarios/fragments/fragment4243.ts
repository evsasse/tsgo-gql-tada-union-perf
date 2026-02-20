import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4241 } from "./fragment4241";
import type { FragmentToken4242 } from "./fragment4242";

export const FRAGMENT_4243 = gql(`
  fragment Fragment4243 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult4243 = ResultOf<typeof FRAGMENT_4243>;
type FragmentSelf4243 = NonNullable<FragmentResult4243>;

export type FragmentToken4243 =
  | FragmentSelf4243["__typename"]
  | FragmentSelf4243["typenameHint"] | FragmentToken4241 | FragmentToken4242;
