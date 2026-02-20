import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4176 } from "./fragment4176";
import type { FragmentToken4177 } from "./fragment4177";

export const FRAGMENT_4178 = gql(`
  fragment Fragment4178 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult4178 = ResultOf<typeof FRAGMENT_4178>;
type FragmentSelf4178 = NonNullable<FragmentResult4178>;

export type FragmentToken4178 =
  | FragmentSelf4178["__typename"]
  | FragmentSelf4178["typenameHint"] | FragmentToken4176 | FragmentToken4177;
