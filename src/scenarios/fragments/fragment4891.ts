import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4889 } from "./fragment4889";
import type { FragmentToken4890 } from "./fragment4890";

export const FRAGMENT_4891 = gql(`
  fragment Fragment4891 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult4891 = ResultOf<typeof FRAGMENT_4891>;
type FragmentSelf4891 = NonNullable<FragmentResult4891>;

export type FragmentToken4891 =
  | FragmentSelf4891["__typename"]
  | FragmentSelf4891["typenameHint"] | FragmentToken4889 | FragmentToken4890;
