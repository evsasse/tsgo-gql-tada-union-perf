import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4879 } from "./fragment4879";
import type { FragmentToken4880 } from "./fragment4880";

export const FRAGMENT_4881 = gql(`
  fragment Fragment4881 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult4881 = ResultOf<typeof FRAGMENT_4881>;
type FragmentSelf4881 = NonNullable<FragmentResult4881>;

export type FragmentToken4881 =
  | FragmentSelf4881["__typename"]
  | FragmentSelf4881["typenameHint"] | FragmentToken4879 | FragmentToken4880;
