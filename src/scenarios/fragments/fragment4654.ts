import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4652 } from "./fragment4652";
import type { FragmentToken4653 } from "./fragment4653";

export const FRAGMENT_4654 = gql(`
  fragment Fragment4654 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult4654 = ResultOf<typeof FRAGMENT_4654>;
type FragmentSelf4654 = NonNullable<FragmentResult4654>;

export type FragmentToken4654 =
  | FragmentSelf4654["__typename"]
  | FragmentSelf4654["typenameHint"] | FragmentToken4652 | FragmentToken4653;
