import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4852 } from "./fragment4852";
import type { FragmentToken4853 } from "./fragment4853";

export const FRAGMENT_4854 = gql(`
  fragment Fragment4854 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult4854 = ResultOf<typeof FRAGMENT_4854>;
type FragmentSelf4854 = NonNullable<FragmentResult4854>;

export type FragmentToken4854 =
  | FragmentSelf4854["__typename"]
  | FragmentSelf4854["typenameHint"] | FragmentToken4852 | FragmentToken4853;
