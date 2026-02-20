import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4736 } from "./fragment4736";
import type { FragmentToken4737 } from "./fragment4737";

export const FRAGMENT_4738 = gql(`
  fragment Fragment4738 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult4738 = ResultOf<typeof FRAGMENT_4738>;
type FragmentSelf4738 = NonNullable<FragmentResult4738>;

export type FragmentToken4738 =
  | FragmentSelf4738["__typename"]
  | FragmentSelf4738["typenameHint"] | FragmentToken4736 | FragmentToken4737;
