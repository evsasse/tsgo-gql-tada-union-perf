import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4690 } from "./fragment4690";
import type { FragmentToken4691 } from "./fragment4691";

export const FRAGMENT_4692 = gql(`
  fragment Fragment4692 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult4692 = ResultOf<typeof FRAGMENT_4692>;
type FragmentSelf4692 = NonNullable<FragmentResult4692>;

export type FragmentToken4692 =
  | FragmentSelf4692["__typename"]
  | FragmentSelf4692["typenameHint"] | FragmentToken4690 | FragmentToken4691;
