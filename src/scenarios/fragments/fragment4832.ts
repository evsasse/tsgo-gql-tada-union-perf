import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4830 } from "./fragment4830";
import type { FragmentToken4831 } from "./fragment4831";

export const FRAGMENT_4832 = gql(`
  fragment Fragment4832 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult4832 = ResultOf<typeof FRAGMENT_4832>;
type FragmentSelf4832 = NonNullable<FragmentResult4832>;

export type FragmentToken4832 =
  | FragmentSelf4832["__typename"]
  | FragmentSelf4832["typenameHint"] | FragmentToken4830 | FragmentToken4831;
