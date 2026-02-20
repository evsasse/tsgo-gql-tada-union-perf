import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4226 } from "./fragment4226";
import type { FragmentToken4227 } from "./fragment4227";

export const FRAGMENT_4228 = gql(`
  fragment Fragment4228 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult4228 = ResultOf<typeof FRAGMENT_4228>;
type FragmentSelf4228 = NonNullable<FragmentResult4228>;

export type FragmentToken4228 =
  | FragmentSelf4228["__typename"]
  | FragmentSelf4228["typenameHint"] | FragmentToken4226 | FragmentToken4227;
