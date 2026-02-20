import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4878 } from "./fragment4878";
import type { FragmentToken4879 } from "./fragment4879";

export const FRAGMENT_4880 = gql(`
  fragment Fragment4880 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult4880 = ResultOf<typeof FRAGMENT_4880>;
type FragmentSelf4880 = NonNullable<FragmentResult4880>;

export type FragmentToken4880 =
  | FragmentSelf4880["__typename"]
  | FragmentSelf4880["typenameHint"] | FragmentToken4878 | FragmentToken4879;
