import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken771 } from "./fragment771";
import type { FragmentToken772 } from "./fragment772";

export const FRAGMENT_773 = gql(`
  fragment Fragment773 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult773 = ResultOf<typeof FRAGMENT_773>;
type FragmentSelf773 = NonNullable<FragmentResult773>;

export type FragmentToken773 =
  | FragmentSelf773["__typename"]
  | FragmentSelf773["typenameHint"] | FragmentToken771 | FragmentToken772;
