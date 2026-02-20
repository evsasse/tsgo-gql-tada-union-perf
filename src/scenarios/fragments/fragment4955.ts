import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4953 } from "./fragment4953";
import type { FragmentToken4954 } from "./fragment4954";

export const FRAGMENT_4955 = gql(`
  fragment Fragment4955 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult4955 = ResultOf<typeof FRAGMENT_4955>;
type FragmentSelf4955 = NonNullable<FragmentResult4955>;

export type FragmentToken4955 =
  | FragmentSelf4955["__typename"]
  | FragmentSelf4955["typenameHint"] | FragmentToken4953 | FragmentToken4954;
