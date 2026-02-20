import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4831 } from "./fragment4831";
import type { FragmentToken4832 } from "./fragment4832";

export const FRAGMENT_4833 = gql(`
  fragment Fragment4833 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult4833 = ResultOf<typeof FRAGMENT_4833>;
type FragmentSelf4833 = NonNullable<FragmentResult4833>;

export type FragmentToken4833 =
  | FragmentSelf4833["__typename"]
  | FragmentSelf4833["typenameHint"] | FragmentToken4831 | FragmentToken4832;
