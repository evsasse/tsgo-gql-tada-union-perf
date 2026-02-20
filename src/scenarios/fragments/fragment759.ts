import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken757 } from "./fragment757";
import type { FragmentToken758 } from "./fragment758";

export const FRAGMENT_759 = gql(`
  fragment Fragment759 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult759 = ResultOf<typeof FRAGMENT_759>;
type FragmentSelf759 = NonNullable<FragmentResult759>;

export type FragmentToken759 =
  | FragmentSelf759["__typename"]
  | FragmentSelf759["typenameHint"] | FragmentToken757 | FragmentToken758;
