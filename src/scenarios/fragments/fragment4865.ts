import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4863 } from "./fragment4863";
import type { FragmentToken4864 } from "./fragment4864";

export const FRAGMENT_4865 = gql(`
  fragment Fragment4865 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult4865 = ResultOf<typeof FRAGMENT_4865>;
type FragmentSelf4865 = NonNullable<FragmentResult4865>;

export type FragmentToken4865 =
  | FragmentSelf4865["__typename"]
  | FragmentSelf4865["typenameHint"] | FragmentToken4863 | FragmentToken4864;
