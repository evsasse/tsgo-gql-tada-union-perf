import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4997 } from "./fragment4997";
import type { FragmentToken4998 } from "./fragment4998";

export const FRAGMENT_4999 = gql(`
  fragment Fragment4999 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult4999 = ResultOf<typeof FRAGMENT_4999>;
type FragmentSelf4999 = NonNullable<FragmentResult4999>;

export type FragmentToken4999 =
  | FragmentSelf4999["__typename"]
  | FragmentSelf4999["typenameHint"] | FragmentToken4997 | FragmentToken4998;
