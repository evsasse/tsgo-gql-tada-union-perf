import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4653 } from "./fragment4653";
import type { FragmentToken4654 } from "./fragment4654";

export const FRAGMENT_4655 = gql(`
  fragment Fragment4655 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult4655 = ResultOf<typeof FRAGMENT_4655>;
type FragmentSelf4655 = NonNullable<FragmentResult4655>;

export type FragmentToken4655 =
  | FragmentSelf4655["__typename"]
  | FragmentSelf4655["typenameHint"] | FragmentToken4653 | FragmentToken4654;
