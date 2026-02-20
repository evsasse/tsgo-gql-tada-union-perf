import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken835 } from "./fragment835";
import type { FragmentToken836 } from "./fragment836";

export const FRAGMENT_837 = gql(`
  fragment Fragment837 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult837 = ResultOf<typeof FRAGMENT_837>;
type FragmentSelf837 = NonNullable<FragmentResult837>;

export type FragmentToken837 =
  | FragmentSelf837["__typename"]
  | FragmentSelf837["typenameHint"] | FragmentToken835 | FragmentToken836;
