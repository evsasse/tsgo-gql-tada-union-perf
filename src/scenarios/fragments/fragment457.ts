import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken455 } from "./fragment455";
import type { FragmentToken456 } from "./fragment456";

export const FRAGMENT_457 = gql(`
  fragment Fragment457 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult457 = ResultOf<typeof FRAGMENT_457>;
type FragmentSelf457 = NonNullable<FragmentResult457>;

export type FragmentToken457 =
  | FragmentSelf457["__typename"]
  | FragmentSelf457["typenameHint"] | FragmentToken455 | FragmentToken456;
