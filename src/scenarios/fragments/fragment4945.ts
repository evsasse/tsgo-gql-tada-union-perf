import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4943 } from "./fragment4943";
import type { FragmentToken4944 } from "./fragment4944";

export const FRAGMENT_4945 = gql(`
  fragment Fragment4945 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult4945 = ResultOf<typeof FRAGMENT_4945>;
type FragmentSelf4945 = NonNullable<FragmentResult4945>;

export type FragmentToken4945 =
  | FragmentSelf4945["__typename"]
  | FragmentSelf4945["typenameHint"] | FragmentToken4943 | FragmentToken4944;
