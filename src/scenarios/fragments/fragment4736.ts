import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4734 } from "./fragment4734";
import type { FragmentToken4735 } from "./fragment4735";

export const FRAGMENT_4736 = gql(`
  fragment Fragment4736 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult4736 = ResultOf<typeof FRAGMENT_4736>;
type FragmentSelf4736 = NonNullable<FragmentResult4736>;

export type FragmentToken4736 =
  | FragmentSelf4736["__typename"]
  | FragmentSelf4736["typenameHint"] | FragmentToken4734 | FragmentToken4735;
