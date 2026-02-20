import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4339 } from "./fragment4339";
import type { FragmentToken4340 } from "./fragment4340";

export const FRAGMENT_4341 = gql(`
  fragment Fragment4341 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult4341 = ResultOf<typeof FRAGMENT_4341>;
type FragmentSelf4341 = NonNullable<FragmentResult4341>;

export type FragmentToken4341 =
  | FragmentSelf4341["__typename"]
  | FragmentSelf4341["typenameHint"] | FragmentToken4339 | FragmentToken4340;
